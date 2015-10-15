
var pista = function({
	nome 		: String,
	logo 		: String,
	descricao 	: String,
	fundo 		: boolean, 
	esportes	: Array
});

/*

create_table "pistas", force: :cascade do |t|
    t.string   "nome"
    t.text     "descricao"
    t.string   "foto"
    t.boolean  "fundo",          default: false
    t.integer  "responsavel_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end
*/