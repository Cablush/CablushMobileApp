
var loja = function({
	nome 		: String,
	logo 		: String,
	descricao 	: String,
	site 		: String,
	telefone	: String,
	email 		: String,
	facebook 	: String,
	fundo 		: boolean,
	virtual 	: boolean, 
	patrocinado : boolean,
	esportes	: Array
});


/*

create_table "lojas", force: :cascade do |t|
    t.string   "nome"
    t.text     "descricao"
    t.string   "telefone"
    t.string   "email"
    t.string   "website"
    t.string   "facebook"
    t.string   "logo"
    t.boolean  "fundo",          default: false
    t.integer  "responsavel_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end
  */