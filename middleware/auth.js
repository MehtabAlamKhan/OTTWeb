import jwt from "jsonwebtoken";

function auth(req, res, next) {
  const token = req.header("auth-tok");

  if (!token) return res.status(401).json({ msg: "Access Denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Invalid Token" });
  }
}

export default auth;
