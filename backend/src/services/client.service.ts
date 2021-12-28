import { Client } from "../model/Client";

class ClientService {
  public getAll(): Client[] {
    return [];
  }

  public getById(): Client {
    return {
      email: "test@client.com",
      name: "Test",
      requirement: "Develop X software",
    };
  }
}

export default ClientService;
