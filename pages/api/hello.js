// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  process.env
  res.status(200).json({ name: "John Doe" });
};
