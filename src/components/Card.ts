import { ReturnType } from "../types";
import { data } from "../data";
import Div from "../elements/Div";
import Image from "../elements/Image";
import Paragraph from "../elements/Paragraph";
import { status, country, StatusType, CountryType } from "../data";
import Heading from "../elements/Heading";
import Anchor from "../elements/Anchor";

export type CardProps = {
  item: ReturnType<typeof data>;
};

class Card {
  private content({ item }: CardProps) {
    return Div.render({
      className:
        "flex flex-col justify-between items-center bg-[#101828] w-120 h-120 rounded-2xl shadow-lg",
      events: {
        click: (e) => {
          e.stopPropagation();
        },
      },
      children: [
        Div.render({
          className:
            "flex flex-col items-center justify-center flex-1 gap-2 text-white",
          children: [
            Image.render({
              className: "rounded-full w-[130px] h-[130px] object-cover",
              attrs: {
                src: item.image,
                alt: item.name,
              },
            }),
            Heading.render({
              level: 3,
              text: item.name,
              className: "text-xl mt-2",
            }),
            Paragraph.render({
              text: item.company,
              className: "text-gray-300",
            }),
            Paragraph.render({
              className: `inline-flex items-center justify-center gap-2 before:content-[''] before:rounded-full before:w-[10px] before:h-[10px] ${
                status[item.status.toLowerCase() as StatusType] ?? ""
              }`,
              text: item.status,
            }),
            Paragraph.render({
              className: `inline-flex items-center justify-center gap-2 before:content-[''] before:w-[16px] before:h-[16px] ${
                country[item.country.toLowerCase() as CountryType] ?? ""
              }`,
              text: item.country,
            }),
          ],
        }),

        Div.render({
          className:
            "flex w-full justify-between border border-[#1e2939] text-white",
          children: [
            Anchor.render({
              className:
                "flex-1 hover:bg-gray-800 inline-flex items-center justify-center gap-2 before:content-[''] before:rounded-full before:w-[16px] before:h-[16px] before:bg-[url(/email.svg)]",
              text: "Email",
              attrs: {
                href: `mailto:${item.email}`,
              },
            }),
            Anchor.render({
              className:
                "flex-1 border-l border-[#1e2939] p-4 hover:bg-gray-800 inline-flex items-center justify-center gap-2 before:content-[''] before:rounded-full before:w-[16px] before:h-[16px] before:bg-[url(/phone.svg)]",
              text: "Ligar",
              attrs: {
                href: `tel:${item.phone}`,
              },
            }),
          ],
        }),
      ],
    });
  }

  public render({ item }: CardProps) {
    return this.content({ item });
  }
}

export default new Card();
