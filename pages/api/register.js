import connect from "../../utils/connection";
import { addUser } from "../../utils/helpers/user";

const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }
  await connect();
  const { username, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = {
      username,
      password:hashedPassword,
    };

    addUser(user);

    res.status(200).json({ message: "User create success" });
  } catch (error) {
    res.status(500).json({ message: "Error to create user" });
  }
}
