import { IPipefyFunction, PipefyClient } from "@pipefy/n8n-node-core";

export default class CardDone implements IPipefyFunction {
  constructor(private readonly client: PipefyClient) {}

  public async execute(input: any): Promise<any> {
    const { id } = input;

    await this.client.markCardDone({
      id,
    });

    return {
      id,
    };
  }

  public getMetadata(): any {
    return {
      name: "Card Done",
      description: "Marca um cartão como concluído no Pipefy.",
      inputs: {
        id: {
          description: "ID do cartão.",
          type: "string",
          required: true,
        },
      },
      outputs: {
        id: {
          description: "ID do cartão.",
          type: "string",
        },
      },
    };
  }
}