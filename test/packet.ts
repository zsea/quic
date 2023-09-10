import Parse from "../src/packet/parse";
const packet=Buffer.from([0xCB,0x00,0x00,0x00,0x01,0x0B,0x94,0x53,0x4F,0xEA,0x30,0x9B,0x4C,0x59,0x1F,0x7C,0x4C,0x00,0x00,0x44,0xCF,0x96,0x35,0x49,0xE8,0xD3,0x6A,0x2E,0x9D,0x69,0x11,0xF9,0xAE,0x07,0x36,0xBF,0xD2,0x71,0x35,0xBD,0x55,0x9B,0x3F,0x5F,0x19,0x3D,0x56,0x50,0xB6,0x3C,0x66,0x9E,0x4F,0x76,0x0D,0x50,0xE0,0x9E,0x92,0x1F,0x98,0x8D,0x66,0x84,0x4C,0xD2,0x84,0xD2,0x0B,0x3F,0xBF,0xC6,0xCA,0x10,0x4F,0x86,0x60,0x1E,0xAA,0x91,0xE0,0x79,0x3C,0xA1,0x5E,0xD6,0xD5,0xA9,0x8E,0x79,0x63,0x92,0xCE,0x0B,0xC9,0xDC,0x39,0xD0,0xCC,0xF3,0x8F,0x3E,0x9D,0xC4,0xF2,0xE3,0x86,0xF5,0x45,0x68,0x35,0xB7,0x23,0xF1,0xF4,0x35,0x78,0x31,0xE4,0xE1,0x15,0x95,0x27,0x75,0x43,0x9E,0x36,0x28,0x5D,0x9A,0xA2,0x35,0xB6,0x16,0xD8,0x5C,0x8C,0x68,0xB4,0x8C,0x56,0xC1,0x56,0x82,0x11,0xF7,0x2E,0xDF,0xE6,0x9D,0xA9,0x53,0x89,0xE0,0x90,0x72,0x9C,0xC1,0x93,0x7B,0x31,0x93,0x0D,0xF4,0xCB,0xD7,0x35,0xA8,0xA1,0x1A,0x4C,0x84,0xB7,0x7C,0x2C,0xDD,0x17,0xCB,0x66,0xFA,0xFD,0xBB,0xC4,0xA1,0x12,0x49,0x47,0x53,0xBB,0xFB,0xD7,0x65,0xE0,0x70,0x18,0x96,0x37,0xAD,0xE8,0x3C,0x45,0x14,0xA3,0xEE,0x7E,0x78,0x57,0x74,0xC7,0x27,0x4F,0x33,0xF3,0x79,0x08,0x09,0x05,0x59,0xBB,0xD7,0x53,0x1C,0x39,0x36,0x74,0x89,0x46,0x64,0x51,0x26,0xC6,0xB6,0xD6,0xED,0x46,0x3B,0xED,0x6C,0x38,0xAE,0xAB,0xEB,0x96,0x62,0x4D,0x60,0x4B,0x9C,0x63,0x78,0xC3,0xBE,0x58,0x22,0x4B,0xCE,0x09,0xD9,0x39,0x69,0xD8,0x0A,0x23,0x0A,0x9A,0x62,0x79,0xD1,0x8F,0x9B,0x64,0x33,0xF0,0x15,0x77,0x03,0x6F,0xFA,0x36,0xEF,0xA6,0x59,0xA6,0xA9,0x81,0x41,0x2B,0x18,0x17,0x85,0x44,0x91,0x37,0x10,0x85,0x26,0x98,0x38,0x3B,0x14,0xBA,0x9C,0x60,0x76,0x72,0xF0,0x59,0x41,0xFF,0xFE,0xC6,0xD7,0x1B,0xF9,0x49,0x11,0x74,0x93,0xE5,0x46,0x66,0xB5,0x4D,0xB2,0x73,0xC8,0xB0,0xBF,0x96,0xF3,0xFC,0x83,0xB5,0x10,0xD0,0x6B,0x36,0xCD,0x19,0x65,0xBA,0xE5,0x66,0xC1,0xD2,0x0D,0xDE,0xCD,0x10,0x8B,0x98,0x0A,0xFC,0x85,0x8F,0x40,0xED,0x8B,0x93,0xC7,0xAD,0x5E,0x79,0xB0,0x48,0x72,0xCF,0x87,0x3C,0x64,0xD9,0x2A,0x1A,0x6F,0x00,0xA3,0xD8,0x0A,0x2D,0xDB,0x70,0x9C,0x4B,0xFA,0x62,0xCC,0xC5,0x1F,0x59,0xC2,0x6E,0x2A,0x36,0xDF,0x93,0x60,0xFC,0x84,0x75,0xE3,0x89,0x93,0xD8,0x55,0x91,0x37,0x4B,0x09,0xBC,0x95,0xFA,0x49,0xF8,0x85,0x9D,0x94,0x06,0x71,0xF4,0x94,0xB9,0xBF,0xDC,0x4D,0x63,0x9A,0xCB,0x3D,0xC3,0xE1,0x26,0x83,0xB0,0x90,0xE6,0xE5,0xFB,0xD5,0x32,0x92,0xBC,0xAB,0x57,0xF5,0x49,0xD3,0x3A,0x9B,0xAA,0xBE,0xF1,0xBB,0x9B,0xD4,0xC0,0x3F,0x73,0x32,0xAB,0x3D,0xFB,0xFB,0x60,0xDD,0x14,0xC0,0xA6,0xFD,0x47,0x4B,0x57,0x47,0xF9,0xE0,0x75,0x2D,0xB4,0xAF,0x99,0x24,0x95,0x72,0xEA,0xF4,0xF1,0x53,0x6D,0x6B,0x34,0x38,0x16,0x9E,0x57,0xDE,0x25,0x86,0x5E,0x6B,0xF5,0x35,0x61,0xC3,0x73,0x7E,0xC3,0x34,0xD9,0xDC,0x6B,0xB4,0x35,0x3B,0xDF,0x51,0x14,0x3D,0x33,0xAD,0x55,0x20,0x51,0xA5,0x9B,0x65,0xC8,0x74,0x13,0x9C,0xA8,0xC8,0x76,0xBE,0xF0,0x5F,0xDC,0x99,0xD4,0xF2,0x3C,0x73,0x30,0xE4,0x20,0x3C,0xE2,0xF0,0x2F,0xBC,0xA5,0x45,0x2C,0x8A,0x08,0x59,0x92,0xCB,0x71,0x8B,0xCE,0xF8,0x27,0x34,0x78,0x59,0xC8,0x29,0x99,0x75,0x56,0x10,0xA9,0xB5,0xCB,0xAB,0x44,0x60,0xCA,0x4C,0xB5,0x3C,0xC1,0x0D,0xED,0x1B,0xE5,0xA4,0x32,0x41,0xC8,0x81,0x8A,0x40,0xCF,0xD6,0x7A,0xFA,0x69,0x26,0x15,0x09,0xF2,0xBA,0x82,0x0F,0xBA,0x91,0xEF,0x2A,0x8E,0x70,0xC5,0xD8,0xFE,0xB6,0xAC,0x76,0x8C,0xAE,0xCD,0x21,0xF0,0xB7,0x5E,0xE1,0x83,0x7A,0x14,0x31,0xD8,0x17,0x7A,0x4E,0xBD,0xBF,0xF6,0x07,0xA2,0x90,0x3B,0xB5,0x75,0xAB,0xB4,0xC0,0xF5,0x78,0x0E,0x5D,0xFF,0x9D,0x33,0xD9,0x48,0xD2,0xB3,0x51,0x9E,0xE3,0xCE,0x4A,0x2E,0x53,0xEB,0xE7,0xB3,0x77,0x07,0x92,0xFD,0xB6,0xA5,0x42,0xBF,0x0A,0x86,0xDD,0xBF,0x6F,0x55,0xE7,0x7F,0xE5,0x13,0x39,0xF4,0xAC,0x65,0x06,0x78,0x74,0x64,0x94,0x76,0xF7,0x01,0x37,0xF1,0x24,0x4A,0x0E,0x30,0xDC,0xD9,0x5A,0xA0,0x88,0xDC,0x87,0x02,0xB8,0x42,0x06,0x39,0xCF,0x14,0x40,0x24,0x69,0x76,0x42,0xEA,0x03,0x2C,0xF7,0x37,0x31,0x2A,0x1A,0x77,0x2E,0xF3,0x39,0xE9,0x5E,0xF6,0x3F,0xAF,0xEE,0xB0,0xBE,0x0F,0x32,0x67,0x8C,0x67,0x04,0xB0,0xCA,0xF1,0x09,0x1F,0x57,0x33,0x73,0xE7,0x97,0xCC,0x78,0x72,0xDD,0x8A,0x5A,0x9F,0x7B,0x23,0xD0,0x7B,0x95,0x5D,0x31,0x1A,0x0C,0x9A,0x63,0x77,0xD7,0x3B,0x57,0x49,0xE9,0x1D,0xA2,0x8D,0x6E,0xEE,0xDD,0x43,0x93,0x10,0x3F,0x04,0xBC,0xF6,0x63,0x52,0xE8,0xA6,0x12,0x9E,0x54,0x26,0x1B,0xCC,0x7E,0x0A,0x09,0x2A,0x8F,0x74,0xDF,0x6F,0x10,0x99,0x7E,0xDA,0x2A,0x24,0xA6,0x7B,0x3C,0x01,0x49,0x2D,0x9E,0xE5,0x52,0x82,0xBD,0x7E,0xA5,0xB2,0x5D,0xDF,0x07,0xD0,0xAF,0x2B,0xEC,0x05,0x27,0xBF,0xD0,0xA7,0xE6,0xA6,0x20,0xB1,0x66,0x29,0xD1,0x31,0x98,0xEA,0x13,0xCD,0xB7,0xE6,0xA4,0x99,0xA0,0x47,0x61,0xCB,0x4E,0xE9,0xDB,0x64,0xE0,0x3C,0x80,0xD3,0xD8,0x58,0xF0,0x71,0x2A,0xFD,0xED,0x16,0xE3,0xA1,0x25,0x4C,0xCB,0xDB,0x40,0xD3,0x33,0x3B,0xE6,0x47,0x54,0xB3,0xCA,0x38,0xF9,0xDA,0x16,0x07,0xAF,0xB2,0x40,0xAE,0x47,0xD6,0x51,0x1C,0x3A,0x4E,0x8B,0xF6,0x1E,0x62,0x34,0x94,0xED,0xDA,0x50,0x66,0xE4,0x40,0x34,0x4E,0x4A,0x02,0x36,0x09,0x0D,0x7E,0xF5,0x49,0x22,0x78,0xE7,0x35,0xD4,0xC5,0xDD,0x68,0xA0,0x89,0xED,0x6D,0xE1,0xB2,0x19,0x37,0x24,0x94,0x7F,0xA3,0x72,0xBD,0xEE,0xF6,0x2C,0x5E,0x9C,0x97,0xB6,0xBC,0x75,0xB9,0x56,0x9F,0xBC,0xCF,0xED,0xF6,0xA6,0x38,0xA4,0x14,0xFA,0xD4,0x76,0x44,0x73,0x06,0x27,0x79,0x47,0xAC,0xD1,0x7C,0x59,0xB5,0x0D,0xDC,0x1D,0xED,0xE1,0x9A,0x7F,0xAF,0x36,0x56,0x6E,0xC2,0x44,0x61,0x53,0x14,0xD1,0x46,0x53,0x7E,0xCE,0x21,0x06,0x1F,0x52,0x42,0x1F,0x4A,0x74,0x5B,0xF1,0x19,0x49,0x36,0xC3,0x87,0x15,0xD4,0x8D,0x59,0xDC,0xB9,0x11,0x60,0x3E,0xF0,0x7D,0x89,0xC9,0xC0,0x56,0x37,0xC7,0x50,0xD8,0x39,0xA7,0x55,0x29,0xD6,0xC1,0x22,0xAB,0x16,0x03,0xF8,0x72,0xB8,0xB8,0xBF,0x85,0x4F,0x98,0x65,0xB0,0x9D,0xE1,0x0A,0xD0,0xDB,0x52,0xF8,0xFA,0xB2,0xF1,0x3B,0x57,0xC7,0x85,0x80,0x61,0x28,0xEE,0x46,0x17,0x5C,0x79,0x3B,0xF1,0xFA,0x7B,0xD1,0x62,0xA2,0x02,0x63,0x24,0x23,0x88,0x64,0x3C,0x9C,0x92,0x1E,0x29,0xE1,0x06,0x44,0xCF,0xFA,0xE9,0xD9,0x07,0x27,0x26,0xB9,0x2C,0xC2,0xE9,0x31,0x4F,0x03,0xBD,0x6D,0x35,0x71,0xBD,0xE7,0x1B,0x94,0xC5,0x5A,0x0B,0x96,0xB8,0x97,0x73,0x00,0xDC,0x47,0xC9,0x66,0x56,0x85,0xEC,0x08,0xFE,0xAD,0x26,0xC1,0x34,0xC8,0x29,0xFB,0x07,0xF7,0x9B,0x5E,0x22,0xF3,0x0D,0xD0,0x76,0x69,0x2B,0x62,0x12,0x83,0x15,0x34,0x92,0x24,0x31,0xF8,0x1D,0x1E,0x9E,0x36,0xE9,0x31,0xFE,0x3E,0x3C,0x95,0x0A,0x26,0x52,0xC0,0x1C,0x16,0xB4,0x1C,0x0C,0xF2,0x2A,0x5C,0x46,0x50,0x69,0xF7,0x55,0xD3,0xEB,0x21,0x1E,0x3D,0x48,0xFC,0xA6,0x53,0x97,0x90,0xE9,0xA4,0x5F,0xC6,0xCD,0x84,0xB9,0xE4,0xA7,0x68,0xEF,0x73,0xFC,0x3E,0xBD,0x32,0x67,0xCB,0x15,0x16,0x24,0xFC,0x03,0x03,0x3C,0xC9,0x07,0xFB,0xB7,0x4C,0x6F,0x6C,0x79,0x4E,0x08,0x03,0xF7,0xAD,0x31,0x93,0xDF,0x18,0xF5]);
//const packet=Buffer.from("c000000001088394c8f03e5157080000449e7b9aec34d1b1c98dd7689fb8ec11d242b123dc9bd8bab936b47d92ec356c0bab7df5976d27cd449f63300099f3991c260ec4c60d17b31f8429157bb35a1282a643a8d2262cad67500cadb8e7378c8eb7539ec4d4905fed1bee1fc8aafba17c750e2c7ace01e6005f80fcb7df621230c83711b39343fa028cea7f7fb5ff89eac2308249a02252155e2347b63d58c5457afd84d05dfffdb20392844ae812154682e9cf012f9021a6f0be17ddd0c2084dce25ff9b06cde535d0f920a2db1bf362c23e596d11a4f5a6cf3948838a3aec4e15daf8500a6ef69ec4e3feb6b1d98e610ac8b7ec3faf6ad760b7bad1db4ba3485e8a94dc250ae3fdb41ed15fb6a8e5eba0fc3dd60bc8e30c5c4287e53805db059ae0648db2f64264ed5e39be2e20d82df566da8dd5998ccabdae053060ae6c7b4378e846d29f37ed7b4ea9ec5d82e7961b7f25a9323851f681d582363aa5f89937f5a67258bf63ad6f1a0b1d96dbd4faddfcefc5266ba6611722395c906556be52afe3f565636ad1b17d508b73d8743eeb524be22b3dcbc2c7468d54119c7468449a13d8e3b95811a198f3491de3e7fe942b330407abf82a4ed7c1b311663ac69890f4157015853d91e923037c227a33cdd5ec281ca3f79c44546b9d90ca00f064c99e3dd97911d39fe9c5d0b23a229a234cb36186c4819e8b9c5927726632291d6a418211cc2962e20fe47feb3edf330f2c603a9d48c0fcb5699dbfe5896425c5bac4aee82e57a85aaf4e2513e4f05796b07ba2ee47d80506f8d2c25e50fd14de71e6c418559302f939b0e1abd576f279c4b2e0feb85c1f28ff18f58891ffef132eef2fa09346aee33c28eb130ff28f5b766953334113211996d20011a198e3fc433f9f2541010ae17c1bf202580f6047472fb36857fe843b19f5984009ddc324044e847a4f4a0ab34f719595de37252d6235365e9b84392b061085349d73203a4a13e96f5432ec0fd4a1ee65accdd5e3904df54c1da510b0ff20dcc0c77fcb2c0e0eb605cb0504db87632cf3d8b4dae6e705769d1de354270123cb11450efc60ac47683d7b8d0f811365565fd98c4c8eb936bcab8d069fc33bd801b03adea2e1fbc5aa463d08ca19896d2bf59a071b851e6c239052172f296bfb5e72404790a2181014f3b94a4e97d117b438130368cc39dbb2d198065ae3986547926cd2162f40a29f0c3c8745c0f50fba3852e566d44575c29d39a03f0cda721984b6f440591f355e12d439ff150aab7613499dbd49adabc8676eef023b15b65bfc5ca06948109f23f350db82123535eb8a7433bdabcb909271a6ecbcb58b936a88cd4e8f2e6ff5800175f113253d8fa9ca8885c2f552e657dc603f252e1a8e308f76f0be79e2fb8f5d5fbbe2e30ecadd220723c8c0aea8078cdfcb3868263ff8f0940054da48781893a7e49ad5aff4af300cd804a6b6279ab3ff3afb64491c85194aab760d58a606654f9f4400e8b38591356fbf6425aca26dc85244259ff2b19c41b9f96f3ca9ec1dde434da7d2d392b905ddf3d1f9af93d1af5950bd493f5aa731b4056df31bd267b6b90a079831aaf579be0a39013137aac6d404f518cfd46840647e78bfe706ca4cf5e9c5453e9f7cfd2b8b4c8d169a44e55c88d4a9a7f9474241e221af44860018ab0856972e194cd934","hex");
Parse(packet);