type ICompany = {
  text: string;
  url: string;
};
interface ICompaniesProp {
  companies: ICompany[];
}
const Companies: React.FC<ICompaniesProp> = ({ companies }) => {
  return (
    <div className="flex gap-8 text-xl text-nowrap overflow-hidden py-10 lg:gap-16 justify-between items-center">
      {companies.map((company) => (
        <div key={company.text}>
          <img src={company.url} alt={company.text} className="" />
        </div>
      ))}
    </div>
  );
};
export default Companies;
