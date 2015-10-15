
var evento = function({
	nome 		: String,
	cartaz 		: String,
	descricao 	: String,
	site 		: String,
	contato		: String,
	email 		: String,
	data		: Date,
	home		: String,
	facebook 	: String,
	fundo 		: boolean, 
	patrocinado : boolean,
	esportes	: Array
});

/*
create_table "eventos", force: :cascade do |t|
    t.string   "nome"
    t.string   "descricao"
    t.date     "data"
    t.time     "hora"
    t.string   "cartaz"
    t.boolean  "fundo",          default: false
    t.integer  "responsavel_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end
*/