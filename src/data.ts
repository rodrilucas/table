import Div from "./elements/Div";
import { createEl } from "./helpers/createEl";
import { ReturnType } from "./types";
import { faker } from "@faker-js/faker";
import { renderText } from "./utils/renderText";

type Person = ReturnType<typeof data>;
export type StatusType = "online" | "offline" | "away" | "busy" | "pending";
export type CountryType = "br" | "us" | "de" | "fr" | "pt" | "ar" | "ca";
type GenderType = "masculino" | "feminino";
type CountryCode = keyof typeof locations;

const locations: Record<string, { states: string[]; cities: string[] }> = {
  BR: {
    states: ["SP", "RJ", "MG", "PR", "BA"],
    cities: [
      "São Paulo",
      "Rio de Janeiro",
      "Belo Horizonte",
      "Curitiba",
      "Salvador",
    ],
  },
  US: {
    states: ["CA", "NY", "TX", "FL", "IL"],
    cities: ["Los Angeles", "New York", "Houston", "Miami", "Chicago"],
  },
  DE: {
    states: ["BE", "BW", "BY", "HE", "HH"],
    cities: ["Berlin", "Stuttgart", "Munich", "Frankfurt", "Hamburg"],
  },
  FR: {
    states: ["IDF", "NAQ", "OCC", "PAC", "ARA"],
    cities: ["Paris", "Bordeaux", "Toulouse", "Marseille", "Lyon"],
  },
  PT: {
    states: ["LS", "PRT", "BG", "EV", "CB"],
    cities: ["Lisboa", "Porto", "Braga", "Évora", "Coimbra"],
  },
  AR: {
    states: ["BA", "CB", "SF", "MZ", "TDF"],
    cities: ["Buenos Aires", "Córdoba", "Santa Fe", "Mendoza", "Ushuaia"],
  },
  CA: {
    states: ["ON", "QC", "BC", "AB", "MB"],
    cities: ["Toronto", "Montreal", "Vancouver", "Calgary", "Winnipeg"],
  },
};

const countryPhoneFormats: Record<
  CountryCode,
  { code: string; areaCodes: string[] }
> = {
  BR: { code: "+55", areaCodes: ["11", "21", "31", "41", "71"] },
  US: { code: "+1", areaCodes: ["213", "212", "713", "305", "312"] },
  DE: { code: "+49", areaCodes: ["30", "711", "89", "69", "40"] },
  FR: { code: "+33", areaCodes: ["1", "5", "5", "4", "4"] },
  PT: { code: "+351", areaCodes: ["21", "22", "253", "266", "239"] },
  AR: { code: "+54", areaCodes: ["11", "351", "342", "261", "2901"] },
  CA: { code: "+1", areaCodes: ["416", "514", "604", "403", "204"] },
};

const countries = Object.keys(locations) as CountryCode[];

const femaleNames = Array.from({ length: 100 }, () => faker.person.firstName());

const companies = Array.from({ length: 100 }, () => faker.company.name());

const data = Array.from({ length: 100 }, (_, i) => {
  const name = femaleNames[i];
  const email = `${name.toLowerCase().replace(/\s+/g, ".")}@example.com`;
  const country = countries[i % countries.length];
  const states = locations[country].states;
  const cities = locations[country].cities;
  const company = companies[i];
  const state = states[i % states.length];
  const city = cities[i % cities.length];
  const phone = (() => {
    const { code, areaCodes } = countryPhoneFormats[country];
    const areaCode = areaCodes[i % areaCodes.length];
    const number = `${Math.floor(1000000 + Math.random() * 9000000)}`;
    return `${code} ${areaCode} ${number}`;
  })();
  const cpf = faker.helpers.replaceSymbols("###.###.###-##");
  return {
    id: i + 1,
    name,
    email,
    phone,
    country,
    state,
    city,
    cpf,
    company,
    image: [
      "https://images.pexels.com/photos/1006265/pexels-photo-1006265.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3053844/pexels-photo-3053844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3762813/pexels-photo-3762813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3888099/pexels-photo-3888099.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/3772517/pexels-photo-3772517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/13911191/pexels-photo-13911191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/13896066/pexels-photo-13896066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/13896897/pexels-photo-13896897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4972790/pexels-photo-4972790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7351078/pexels-photo-7351078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5940793/pexels-photo-5940793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3214785/pexels-photo-3214785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4311608/pexels-photo-4311608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5876479/pexels-photo-5876479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6051360/pexels-photo-6051360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5388587/pexels-photo-5388587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600",
    ][i % 25],
    age: faker.number.int({ min: 18, max: 50 }),
    registered: faker.date.past({ years: 5 }).toLocaleDateString(),
    accountBalance: faker.finance.amount(),
    department: faker.commerce.department(),
    gender: ["Feminino", "Masculino"][i % 2],
    married: faker.datatype.boolean(),
    status: ["Online", "Offline", "Away", "Busy", "Pending"][i % 5],
  };
});

export const status: Record<StatusType, string> = {
  online: "before:bg-[#05df72]",
  offline: "before:bg-[#ff637e]",
  away: "before:bg-[#ffcc00]",
  busy: "before:bg-[#ff0000]",
  pending: "before:bg-[#808080]",
};

// @ts-ignore
const gender: Record<GenderType, string> = {
  feminino: "before:bg-[url(/female.svg)]",
  masculino: "before:bg-[url(/male.svg)]",
};

export const country: Record<CountryType, string> = {
  br: "before:bg-[url(/br.svg)]",
  us: "before:bg-[url(/us.svg)]",
  de: "before:bg-[url(/de.svg)]",
  fr: "before:bg-[url(/fr.svg)]",
  pt: "before:bg-[url(/pt.svg)]",
  ar: "before:bg-[url(/ar.svg)]",
  ca: "before:bg-[url(/ca.svg)]",
};

const config = [
  {
    label: "Id",
    render: (p: Person) => renderText(p.id),
  },
  {
    label: "Nome",
    render: (p: Person) =>
      Div.render({
        className: "flex items-center gap-4 ml-4",
        children: [
          createEl("img", {
            className: "rounded-full w-[40px] h-[40px] object-cover",
            attrs: {
              src: p.image,
            },
          }),
          createEl("p", {
            className: "text-center",
            text: p.name,
          }),
        ],
      }),
    sortValue: (p: Person) => p.name,
  },
  {
    label: "Status",
    render: (p: Person) =>
      createEl("p", {
        className: `inline-flex items-center justify-center gap-2 before:content-[''] before:rounded-full before:w-[10px] before:h-[10px] ${
          status[p.status.toLowerCase() as StatusType] ?? ""
        }`,
        text: p.status,
      }),
    sortValue: (p: Person) => p.status,
  },
  {
    label: "Idade",
    render: (p: Person) => renderText(p.age),
    sortValue: (p: Person) => p.age,
  },
  {
    label: "CPF",
    render: (p: Person) => renderText(p.cpf),
  },

  {
    label: "Email",
    render: (p: Person) =>
      createEl("p", { className: "text-[#9299a7]", text: p.email }),
  },
  {
    label: "Cidade",
    render: (p: Person) => renderText(p.city),
    sortValue: (p: Person) => p.city,
  },
  {
    label: "Estado",
    render: (p: Person) => renderText(p.state),
    sortValue: (p: Person) => p.state,
  },
  {
    label: "País",
    render: (p: Person) =>
      createEl("p", {
        className: `inline-flex items-center justify-center gap-2 before:content-[''] before:w-[16px] before:h-[16px] ${
          country[p.country.toLowerCase() as CountryType] ?? ""
        }`,
        text: p.country,
      }),
  },
  {
    label: "Telefone",
    render: (p: Person) =>
      createEl("p", {
        className: "text-[#9299a7]",
        text: p.phone,
      }),
  },
  {
    label: "Registrado em",
    render: (p: Person) =>
      createEl("p", {
        className:
          "inline-flex items-center justify-center gap-3 before:content-[''] before:w-[16px] before:h-[16px] before:bg-[url(/calendar.svg)]",
        text: p.registered,
      }),
  },
  {
    label: "Saldo",
    render: (p: Person) => renderText(`R$ ${p.accountBalance}`),
    sortValue: (p: Person) => parseFloat(p.accountBalance),
  },
];

export { data, config };
