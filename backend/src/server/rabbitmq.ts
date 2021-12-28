import amqplib from "amqplib";
import Config from "../utils/config";

const connectRabbitMq = async () => {
  try {
    let rabbit = await amqplib.connect(Config.RabbitMQ);
    return rabbit;
  } catch (err) {
    console.error(err);
  }
};

export default connectRabbitMq;
