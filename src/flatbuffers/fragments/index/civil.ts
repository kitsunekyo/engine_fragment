// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Alignment } from '../../fragments/index/alignment.js';


export class Civil {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Civil {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCivil(bb:flatbuffers.ByteBuffer, obj?:Civil):Civil {
  return (obj || new Civil()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCivil(bb:flatbuffers.ByteBuffer, obj?:Civil):Civil {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Civil()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

alignmentHorizontal(index: number, obj?:Alignment):Alignment|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Alignment()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

alignmentHorizontalLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

alignmentVertical(index: number, obj?:Alignment):Alignment|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Alignment()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

alignmentVerticalLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startCivil(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addAlignmentHorizontal(builder:flatbuffers.Builder, alignmentHorizontalOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, alignmentHorizontalOffset, 0);
}

static createAlignmentHorizontalVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startAlignmentHorizontalVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addAlignmentVertical(builder:flatbuffers.Builder, alignmentVerticalOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, alignmentVerticalOffset, 0);
}

static createAlignmentVerticalVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startAlignmentVerticalVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endCivil(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createCivil(builder:flatbuffers.Builder, alignmentHorizontalOffset:flatbuffers.Offset, alignmentVerticalOffset:flatbuffers.Offset):flatbuffers.Offset {
  Civil.startCivil(builder);
  Civil.addAlignmentHorizontal(builder, alignmentHorizontalOffset);
  Civil.addAlignmentVertical(builder, alignmentVerticalOffset);
  return Civil.endCivil(builder);
}
}