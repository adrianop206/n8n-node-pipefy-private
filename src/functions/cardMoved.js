import { IPipefyFunction, PipefyClient } from "@pipefy/n8n-node-core";

export default class CardMoved implements IPipefyFunction {
  constructor(private readonly client: PipefyClient) {}

  public async execute(input: any): Promise<any> {
    const { id, state } = input;

    await this.client.moveCard({
      id,
      state,
    });

    return {
      id,
      state,
    };
  }

  public getMetadata(): any {
    return {
      name: "Card Moved",
      description: "Move um cartão no Pipefy.",
      inputs: {
        id: {
          description: "ID do cartão.",
          type: "string",
          required: true,
        },
        state: {
          description: "Novo estado do cartão.",
          type: "string",
          required: true,
        },
      },
      outputs: {
        id: {
          description: "ID do cartão.",
          type: "string",
        },
        state: {
          description: "Novo estado do cartão.",
          type: "string",
        },
      },
    };
  }
}