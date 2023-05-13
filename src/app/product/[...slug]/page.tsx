interface ProductProps {
  params: {
    slug: any;
  };
}

export default function Product({ params }: ProductProps) {
  console.log("🚀 ~ file: page.tsx:9 ~ Product ~ params:", params)
  return <div>
    {params.slug[0]} <br />
    {params.slug[1]}
    </div>;
}
