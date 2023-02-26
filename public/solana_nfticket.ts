export type SolanaTickets = {
  version: "0.1.0";
  name: "solana_tickets";
  instructions: [
    {
      name: "initialize";
      accounts: [
        {
          name: "ticketGif";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "gifUrl";
          type: "string";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "ticketGif";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "publicKey";
          },
          {
            name: "gifUrl";
            type: "string";
          }
        ];
      };
    }
  ];
  metadata: {
    address: "z6fesaPMBuL9G81NThTi66YsFWe1T4VRpjm9D2F8Wag";
  };
};

export const IDL: SolanaTickets = {
  version: "0.1.0",
  name: "solana_tickets",
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "ticketGif",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "gifUrl",
          type: "string",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "ticketGif",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "publicKey",
          },
          {
            name: "gifUrl",
            type: "string",
          },
        ],
      },
    },
  ],
  metadata: {
    address: "z6fesaPMBuL9G81NThTi66YsFWe1T4VRpjm9D2F8Wag",
  },
};