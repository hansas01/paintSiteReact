import ProductList from "../features/ProductFilter";
import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';

export default function ServicePage({ProductsList}) {
  return (
      <>
      <Container>
      <SubHeader current='Servicios' />
      <h1>Descubre los servicios que ofrecemos</h1>
            <ProductList />
      </Container>
      </>
  )
}