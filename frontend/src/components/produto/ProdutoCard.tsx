import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";

import { Produto } from "@/types/equipamento";
import api from "@/services/api";
import { IconButton } from "@mui/material";

interface ProdutoCardProps {
  id: string;
}

function ProdutoCard({ id }: ProdutoCardProps) {
  const router = useRouter();

  let [quantidade, setQuantidade] = useState(1);
  const [produto, setProduto] = useState<Produto>();
  const precoTotal = produto ? quantidade * produto.preco : 0;

  const handleDelete = (e: any) => {
    e.preventDefault();
    api.delete(`/produto/${id}`).then(() => {
      router.push("/produto");
    });
  };

  useEffect(() => {
    api.get(`/produto/${id}`).then((data) => {
      setProduto(data.data);
    });
  }, [id]);

  const increaseQtd = () => {
    if (produto && quantidade < produto.estoque)
      setQuantidade((quantidade += 1));
  };

  const decreaseQtd = () => {
    if (produto && quantidade > 1) setQuantidade((quantidade -= 1));
  };

  if (!produto) return <div>Carregando...</div>;

  return (
    <Card sx={{ maxWidth: 445 }}>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Typography gutterBottom variant="h4" component="div">
            {produto.nome}
          </Typography>
          <ButtonGroup
            size="small"
            variant="contained"
            aria-label="Basic button group"
          >
            <Button onClick={increaseQtd} variant="contained" size="small">
              <AddIcon />
            </Button>
            <Button onClick={decreaseQtd} variant="contained" size="small">
              <RemoveIcon />
            </Button>
          </ButtonGroup>
        </div>

        <Typography variant="body2" color="text.secondary">
          Preço: {produto.preco} <br />
          Estoque: {produto.estoque} <br />
          Quantidade: {quantidade} <br />
          Preço Total: {precoTotal}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton component={Link} href={`/produto/update/${id}`}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProdutoCard;
