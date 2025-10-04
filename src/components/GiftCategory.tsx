import GiftCard from "./GiftCard";

interface Gift {
  id: number;
  name: string;
  image: string;
  link: string;
  isPurchased: boolean;
}

interface GiftCategoryProps {
  title: string;
  icon: React.ReactNode;
  gifts: Gift[];
}

const GiftCategory = ({ title, icon, gifts }: GiftCategoryProps) => {
  return (
    <div className="mb-16">
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="text-primary">{icon}</div>
        <h2 className="text-4xl font-cursive font-bold text-foreground">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gifts.map((gift) => (
          <GiftCard key={gift.id} {...gift} />
        ))}
      </div>
    </div>
  );
};

export default GiftCategory;
