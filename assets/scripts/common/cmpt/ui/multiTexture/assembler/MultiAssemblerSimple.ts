import MultiAssembler from "./MultiAssembler";

export default class MultiAssemblerSimple extends MultiAssembler {
    public updateRenderData(sprite) {
        this.packToDynamicAtlas(sprite, sprite._spriteFrame);

        if (sprite._vertsDirty) {
            this.updateUVs(sprite);
            this.updateVerts(sprite);
            this.updateTextureIdx(sprite);
            sprite._vertsDirty = false;
        }
    }

    public updateUVs(sprite) {
        let uv = sprite._spriteFrame.uv;
        let uvOffset = this.uvOffset;
        let floatsPerVert = this.floatsPerVert;
        let verts = this._renderData.vDatas[0];
        for (let i = 0; i < 4; i++) {
            let srcOffset = i * 2;
            let dstOffset = floatsPerVert * i + uvOffset;
            verts[dstOffset] = uv[srcOffset];
            verts[dstOffset + 1] = uv[srcOffset + 1];
        }
    }

    public updateVerts(sprite) {
        let node = sprite.node,
            cw = node.width, ch = node.height,
            appx = node.anchorX * cw, appy = node.anchorY * ch,
            l, b, r, t;
        if (sprite.trim) {
            l = -appx;
            b = -appy;
            r = cw - appx;
            t = ch - appy;
        }
        else {
            let frame = sprite.spriteFrame,
                ow = frame._originalSize.width, oh = frame._originalSize.height,
                rw = frame._rect.width, rh = frame._rect.height,
                offset = frame._offset,
                scaleX = cw / ow, scaleY = ch / oh;
            let trimLeft = offset.x + (ow - rw) / 2;
            let trimRight = offset.x - (ow - rw) / 2;
            let trimBottom = offset.y + (oh - rh) / 2;
            let trimTop = offset.y - (oh - rh) / 2;
            l = trimLeft * scaleX - appx;
            b = trimBottom * scaleY - appy;
            r = cw + trimRight * scaleX - appx;
            t = ch + trimTop * scaleY - appy;
        }

        let local = this._local;
        local[0] = l;
        local[1] = b;
        local[2] = r;
        local[3] = t;
        this.updateWorldVerts(sprite);
    }
}

if (CC_NATIVERENDERER) {
    let proto = MultiAssemblerSimple.prototype;
    //@ts-ignore
    let nativeProto = renderer.SimpleSprite2D.prototype;

    proto.updateWorldVerts = function (comp) {
        //@ts-ignore
        this._dirtyPtr[0] |= cc.Assembler.FLAG_VERTICES_DIRTY;
    };

    //@ts-ignore
    proto._extendNative = function () {
        nativeProto.ctor.call(this);
    };

    proto.initLocal = function () {
        this._local = new Float32Array(8);
        nativeProto.setLocalData.call(this, this._local);
    };
}
