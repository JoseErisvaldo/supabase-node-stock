import { supabase } from "../../../infra/database/supabase.js";
class SupabaseEstablishmentRepository {
  async create(establishment) {
    const { data, error } = await supabase
      .from("establishments")
      .insert([establishment])
      .select("*")
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
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
