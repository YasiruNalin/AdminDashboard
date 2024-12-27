import './card.css'


interface CardProps {
    title: string;
    value: number;
    chart: React.ReactElement;
}

const Card = ({ title, value, chart }: CardProps) => {
    return (
        <div className="Card">
            <h3>{title}</h3>
            <p className="CardValue">{value}</p>
            <div className="CardChart">{chart}</div>
        </div>
    );
};

export default Card;
