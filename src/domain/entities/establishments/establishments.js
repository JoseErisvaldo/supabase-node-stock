class Establishment {
  constructor({
    id,
    name,
    description,
    address,
    phone,
    email,
    website,
    category_id,
    status = "active",
    logo_url,
    user_id,
    created_at,
    updated_at,
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.website = website;
    this.category_id = category_id;
    this.status = status;
    this.logo_url = logo_url;
    this.user_id = user_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export default Establishment;
