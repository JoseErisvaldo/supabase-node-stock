class CreateCategory {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute({ name, description, color, userId }) {
    if (!name || !description || !color || !userId) {
      throw new Error("Missing required fields");
    }

    return await this.categoryRepository.create({
      name,
      description,
      color,
      user_id: userId,
    });

    return category;
  }
}

export default CreateCategory;
