import { useEffect, useState } from "react";
import HelloWorld from "./HelloWorld.jsx";
import Parent from "./Parent";
import "./App.css";
import FrutaItem from "./FrutaItem";
import api from "./Api.jsx";
import { Button, Card, CardMedia, CardContent, Typography, Link } from "@mui/material";

function App() {
    const [nomeDesejado, setNomeDesejado] = useState("");
    const [data, setData] = useState(null);

    const cesto_frutas = [
        {
            nome: "banana",
            quantidade: 12,
        },
        {
            nome: "maça",
            quantidade: 3,
        },
        {
            nome: "melancia",
            quantidade: 1,
        },
    ];

    // useEffect( () => {
    //     const loadData = async () => {
    //         const response = await api.getCep(nomeDesejado);
    //         setData(response);
    //     }
    //     loadData();
    // } , [nomeDesejado]);

    const loadData = async () => {
        const response = await api.getUser(nomeDesejado);
        setData(response);
    };

    function buscar(event) {
        event.preventDefault();
        loadData();
    }

    return (
        <div>
            <HelloWorld nome="Jean" idade="30" />
            <HelloWorld nome="Carlo" idade="29" />
            <HelloWorld nome="Ma" idade="31" />

            <Parent>
                <HelloWorld nome="Filho" idade="3" />
                <h4>Titulo filho</h4>
                <Parent>
                    <h5>Neto</h5>
                </Parent>
            </Parent>

            {cesto_frutas.map((fruta) => {
                return (
                    <FrutaItem
                        nome={fruta.nome}
                        quantidade={fruta.quantidade}
                    />
                );
            })}
            <input
                onChange={(e) => {
                    setNomeDesejado(e.target.value);
                }}
            />

            <Button onClick={buscar} variant="contained">
                Carregar
            </Button>

            <p>{nomeDesejado}</p>
            <br />
            {data && (
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={data.avatar_url}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {data.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {data.bio}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            <Link href={data.html_url}>
                              @{data.login}
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

export default App;
