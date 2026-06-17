import { supabase } from "../../../infra/database/supabase.js";

class SupabaseCategoryRepository {
  async create(category) {
    console.log("Creating category:", category);
    const { data, error } = await supabase
      .from("categories")
      .insert(category)
      .select("*")
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  async findAllByUserId(userId) {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("user_id", userId);

    if (error) throw new Error(error.message);
    return data;
  }
}

export default SupabaseCategoryRepository;
