import "./App.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function FrutaItem( {nome, quantidade} ){

    const frutaStyle = {
        border: "1px solid black",
        backgroundColor: "yellow"
    }

    return(
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                </CardContent>
            </Card>
            {/* <div className="fruta" style={frutaStyle}>
                Fruta {nome} - quantidade: {quantidade}
            </div> */}
        </div>
    )
}

export default FrutaItem