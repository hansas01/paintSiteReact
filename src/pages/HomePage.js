import SubHeader from '../components/SubHeader';
import { Container } from 'reactstrap';

export default function HomePage() {
    return (
        <Container>
        <SubHeader current='Inicio' />
        <div>Home Page</div>
        </Container>
    )
}