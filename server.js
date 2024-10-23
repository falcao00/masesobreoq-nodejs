//const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const router = require('./routers/index');
const pool = require('./infraesturtura/conexao');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*async function asyncFunction() {
    let conn;
        try {
            conn = await pool.getConnection();
            let rows = await conn.query("SELECT * from posts");
            console.log("teste");
            console.log(rows); //[ {val: 1}, meta: ... ]
    
        } catch (err) {
            throw err;
        } finally {
            if (conn) return conn.end();
        }
    }
       
asyncFunction();*/
/*pool.getConnection().then(conn => {
    conn.query("SELECT * from posts").then((rows)=>{
        console.log("print rows");
        //console.log(rows);
        const json = JSON.stringify(rows);
        console.log(json);
        console.log(rows[2].conteudo);
        //return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
    }).then((res)=>{
        console.log(res);
        conn.end();
    }).catch(err =>{
        //handler error
        conn.end();
    })
}).catch(err =>{
    //not conect
});*/

/*app.get('/index', (req, res)=>{
    res.sendFile(__dirname + '/public/index2.html');
});*/

/*app.get('/titulo/:id', (req, res)=>{
    pool.getConnection().then(conn => {
        conn.query("SELECT * from posts").then((rows)=>{
            //console.log("print rows");
            //console.log(rows);
            //const json = JSON.stringify(rows);
            //console.log(json);
            //console.log(rows[2].conteudo);
            //return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
            //return json;
            const { id } = req.params;
            //console.log(rows[id]);
            return res.json(rows[id]);
        }).then((res)=>{
            console.log(res);
            conn.end();
        }).catch(err =>{
            //handler error
            conn.end();
        })
    }).catch(err =>{
        //not conect
    });
})*/

/*app.get('/titulo', (req, res)=>{
    pool.getConnection().then(conn => {
        conn.query("SELECT * from posts").then((rows)=>{
            //console.log("print rows");
            //console.log(rows);
            //const json = JSON.stringify(rows);
            //console.log(json);
            //console.log(rows[2].conteudo);
            //return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
            //return json;
            //const { id } = req.params;
            //console.log(rows[id]);
            return res.json(rows);
        }).then((res)=>{
            console.log(res);
            conn.end();
        }).catch(err =>{
            //handler error
            conn.end();
        })
    }).catch(err =>{
        //not conect
    });
})*/

/*app.get('/novoPost/:titulo', (req, res)=>{
    pool.getConnection().then(conn => {
        const { titulo } = req.params;
        //const date = new Date().toLocaleDateString();
        const currentDate = new Date();
        const dateISOString = currentDate.toISOString();
        const dateWithoutTime = dateISOString.split('T')[0];
        const conteudo = "mdeu deus do ceu"
        conn.query("INSERT INTO posts VALUES (0, "+ "'"+dateWithoutTime+"'" + "," + "'"+titulo+"'" + "," + "'"+conteudo+"'" + ")").then((rows)=>{
            //console.log("INSERT INTO posts VALUES (0, "+ date + "," + titulo + "," + conteudo + ")");
            console.log(rows);
            //console.log("print rows");
            //console.log(rows);
            //const json = JSON.stringify(rows);
            //console.log(json);
            //console.log(rows[2].conteudo);
            //return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
            //return json;
            //const { id } = req.params;
            //console.log(rows[id]);
            return res.json(rows);
        }).then((res)=>{
            console.log(res);
            conn.end();
        }).catch(err =>{
            //handler error
            //console.log("ERROR");
            conn.end();
        })
    }).catch(err =>{
        //not conect
        console.log("ERROR2");
    });
})*/

//let conn = await pool.getConnection();
//console.log(new Date());

router(app);
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/send', (req, res)=>{
    var newid = req.body.newid;
    console.log(newid);
    res.sendFile(__dirname + '/public/index.html');
})

/*app.post('/newpost', (req, res)=>{
    var titulo = req.body.titulo;
    var data = req.body.data;
    var conteudo = req.body.conteudo;
    console.log(titulo);
    console.log(data);
    console.log(conteudo);
    res.sendFile(__dirname + '/public/newpost.html');
})*/

app.post('/newpost', (req, res)=>{
    var titulo = req.body.titulo;
    var data = req.body.data;
    var conteudo = req.body.conteudo;
    console.log(titulo);
    console.log(data);
    console.log(conteudo);
    pool.getConnection().then(conn => {
        conn.query("INSERT INTO novos_posts VALUES (0, "+ "'"+data+"'" + "," + "'"+titulo+"'" + "," + "'"+conteudo+"'" + ")").then((rows)=>{
            console.log(rows);
            return res.json(rows);
        }).then((res)=>{
            console.log(res);
            conn.end();
        }).catch(err =>{
            conn.end();
        })
    }).catch(err =>{
        console.log("ERROR2");
    });
    res.sendFile(__dirname + '/public/newpost.html');
})

app.get("/index3", (req, res) => {
    pool.getConnection().then(conn => {
        conn.query("SELECT * FROM novos_posts").then((rows)=>{
            //console.log(rows);
            //console.log(rows[0].titulo);
            //console.log(res.body.rows.json());
            //console.log(rows);
            const json = JSON.stringify(rows)
            //console.log("json: " + json);
            //console.log(res.json(json))
            return res.json(json);
        }).then((res)=>{
            //var serverinfo = JSON.parse(res);
            conn.end();
        }).catch(err =>{
            conn.end();
        })
    }).catch(err =>{
        });
  });

/*app.get('/index3', (req, res)=>{
    pool.getConnection().then(conn => {
        conn.query("SELECT * FROM novos_posts").then((rows)=>{
            console.log(rows);
            console.log(rows[0].titulo);
            var titulo = rows[0].titulo;
            //return titulo;
            //return res.json(rows);
            //res.json(rows);
            console.log(rows[0].titulo);
            res.send("<h1 id=" + "titulo-post-home" + ">" + titulo + "</h1>");
            //res.sendFile(__dirname + '/public/index3.html')
        }).then((res)=>{
            console.log(res);
            conn.end();
        }).catch(err =>{
            conn.end();
        })
    }).catch(err =>{
    });
    //res.sendFile(__dirname + '/public/index3.html')
})*/


const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    /*const titulo = "novotitulo"
    const currentDate = new Date();
    const dateISOString = currentDate.toISOString();
    const dateWithoutTime = dateISOString.split('T')[0];
    console.log(titulo);
    console.log(dateWithoutTime);
    const conteudo = "mdeu deus do ceu"
    let nome = "INSERT INTO posts VALUES (0, "+ "'"+dateWithoutTime+"'" + "," + "'"+titulo+"'" + "," + "'"+conteudo+"'" + ")";
    console.log(nome);*/
    console.log(`server is running on port ${port}`);
});