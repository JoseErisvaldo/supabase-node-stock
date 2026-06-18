class GetEstablishments {
  constructor(establishmentsRepository) {
    this.establishmentsRepository = establishmentsRepository;
  }

  async execute(userId) {
    if (!userId) {
      throw new Error("Missing required fields");
    }

    const establishments =
      await this.establishmentsRepository.findAllByUserId(userId);
    return establishments;
  }
}

export default GetEstablishments;
