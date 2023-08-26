import { IPipefyFunction, PipefyClient } from "@pipefy/n8n-node-core";

export default class CreateCard implements IPipefyFunction {
  constructor(private readonly client: PipefyClient) {}

  public async execute(input: any): Promise<any> {
    const { title, description, fields } = input;

    const card = await this.client.createCard({
      title,
      description,
      fields,
    });

    return {
      id: card.id,
      url: card.url,
    };
  }

  public getMetadata(): any {
    return {
      name: "Create Card",
      description: "Cria um novo cartão no Pipefy.",
      inputs: {
        title: {
          description: "Título do cartão.",
          type: "string",
          required: true,
        },
        description: {
          description: "Descrição do cartão.",
          type: "string",
        },
        fields: {
          description: "Campos do cartão.",
          type: "object",
        },
      },
      outputs: {
        id: {
          description: "ID do cartão.",
          type: "string",
        },
        url: {
          description: "URL do cartão.",
          type: "string",
        },
      },
    };
  }
}