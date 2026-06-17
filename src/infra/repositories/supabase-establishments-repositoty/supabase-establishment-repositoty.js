import { supabase } from "../../../infra/database/supabase.js";
class SupabaseEstablishmentRepository {
  async create(establishment) {
    const { data, error } = await supabase
      .from("establishments")
      .insert([establishment]);

    if (error) {
      throw new Error(error.message);
    }

    return data[0];
  }

  async findAllByUserId(userId) {
    const { data, error } = await supabase
      .from("establishments")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}

export default SupabaseEstablishmentRepository;
