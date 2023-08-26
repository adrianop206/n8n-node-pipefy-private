import { IPipefyFunction, PipefyClient } from "@pipefy/n8n-node-core";

export default class CardFieldUpdate implements IPipefyFunction {
  constructor(private readonly client: PipefyClient) {}

  public async execute(input: any): Promise<any> {
    const { id, field, value } = input;

    const updatedCard = await this.client.updateCardField({
      id,
      field,
      value,
    });

    return {
      id,
      field,
      value,
      updatedCard,
    };
  }

  public getMetadata(): any {
    return {
      name: "Card Field Update",
      description: "Atualiza um campo de um cartão no Pipefy.",
      inputs: {
        id: {
          description: "ID do cartão.",
          type: "string",
          required: true,
        },
        field: {
          description: "Nome do campo.",
          type: "string",
          required: true,
        },
        value: {
          description: "Novo valor do campo.",
          type: "any",
          required: true,
        },
      },
      outputs: {
        id: {
          description: "ID do cartão.",
          type: "string",
        },
        field: {
          description: "Nome do campo.",
          type: "string",
        },
        value: {
          description: "Novo valor do campo.",
          type: "any",
        },
        updatedCard: {
          description: "Cartão atualizado.",
          type: "object",
        },
      },
    };
  }
}