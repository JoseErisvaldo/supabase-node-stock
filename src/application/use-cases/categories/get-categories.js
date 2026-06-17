class GetCategories {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(userId) {
    const categories = await this.categoryRepository.findAllByUserId(userId);
    return categories;
  }
}

export default GetCategories;
