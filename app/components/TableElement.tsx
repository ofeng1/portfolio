'use client';

type TableElProps = {
  title: string;
  description: string;
  isFirst?: boolean;
  isLast?: boolean;
};

export default function TableElement({ title, description, isFirst, isLast }: TableElProps) {
  return (
    <li className={`table__row${isLast ? ' table__row--last' : ''}`} tabIndex={0}>
      <h3 className="table__title">{title}</h3>
      <p className="table__desc">{description}</p>
    </li>
  );
}
