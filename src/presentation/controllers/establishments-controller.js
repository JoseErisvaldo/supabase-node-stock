class EstablishmentController {
  constructor(createEstablishment, getEstablishments) {
    this.createEstablishment = createEstablishment;
    this.getEstablishments = getEstablishments;
  }

  async create(req, res) {
    try {
      const establishment = await this.createEstablishment.execute({
        ...req.body,
        userId: req.user.id,
      });

      return res.status(201).json(establishment);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const establishments = await this.getEstablishments.execute(req.user.id);
      return res.status(200).json(establishments);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default EstablishmentController;
