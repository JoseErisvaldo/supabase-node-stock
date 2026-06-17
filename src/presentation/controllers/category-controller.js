class CategoryController {
  constructor(createCategory, getCategories) {
    this.createCategory = createCategory;
    this.getCategories = getCategories;
  }

  async create(req, res) {
    try {
      const category = await this.createCategory.execute({
        ...req.body,
        userId: req.user.id,
      });

      return res.status(201).json(category);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  async getAll(req, res) {
    try {
      const categories = await this.getCategories.execute(req.user.id);
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default CategoryController;
