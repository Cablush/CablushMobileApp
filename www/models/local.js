
var local = function({
	logradouro 	: String,
	numero		: String,
	complemento : String,
	bairro		: String,
	cidade		: String,
	estado		: char(2),
	cep			: String,
	pais		: String,
	latitude	: double,
	longitude	: double
});

/*
  create_table "locais", force: :cascade do |t|
    t.decimal  "latitude",         precision: 15, scale: 10, default: 0.0
    t.decimal  "longitude",        precision: 15, scale: 10, default: 0.0
    t.string   "logradouro"
    t.string   "numero"
    t.string   "complemento"
    t.string   "bairro"
    t.string   "cidade"
    t.string   "estado"
    t.string   "cep"
    t.string   "pais"
    t.integer  "localizavel_id"
    t.string   "localizavel_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  */