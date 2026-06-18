class CreateEstablishments {
  constructor(establishmentsRepository) {
    this.establishmentsRepository = establishmentsRepository;
  }

  async execute({
    name,
    description,
    address,
    phone,
    email,
    website,
    categoryId,
    logoUrl,
    userId,
  }) {
    if (!name || !description || !address || !phone || !email || !website) {
      throw new Error("Missing required fields");
    }

    return await this.establishmentsRepository.create({
      name,
      description,
      address,
      phone,
      email,
      website,
      category_id: categoryId,
      logo_url: logoUrl,
      user_id: userId,
    });
  }
}

export default CreateEstablishments;
