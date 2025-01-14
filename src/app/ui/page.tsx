import { Blockquote } from "@/components/ui/blockquote"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Link } from "@/components/ui/link"
import { Paragraph } from "@/components/ui/paragraph"
import { XIcon } from "lucide-react"

export default function UI() {
  return (
    <div className="p-4 flex flex-col gap-8">
      <Heading>UI Components</Heading>
      <section className="border p-8 bg-white">
        <Heading>The Typography Chronicles</Heading>
        <Paragraph>
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </Paragraph>
        <Heading as="h2">The King&apos;s Plan</Heading>
        <Paragraph>
          The king thought long and hard, and finally came up with{" "}
          <Link href="#">a brilliant plan</Link>: he would tax the jokes in the
          kingdom.
        </Paragraph>
        <Blockquote>
          &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
          itParagraphs only fair that they should pay for the privilege.&quot;
        </Blockquote>
        <Heading as="h3">The Joke Tax</Heading>
        <Paragraph>
          The kingParagraphs subjects were not amused. They grumbled and
          complained, but the king was firm:
        </Paragraph>

        <Paragraph>
          As a result, people stopped telling jokes, and the kingdom fell into a
          gloom. But there was one person who refused to let the kingParagraphs
          foolishness get him down: a court jester named Jokester.
        </Paragraph>
        <Heading as="h3">JokesterParagraphs Revolt</Heading>
        <Paragraph>
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the kingParagraphs pillow, in
          his soup, even in the royal toilet. The king was furious, but he
          couldnParagrapht seem to stop Jokester.
        </Paragraph>
        <Paragraph>
          And then, one day, the people of the kingdom discovered that the jokes
          left by Jokester were so funny that they couldnParagrapht help but
          laugh. And once they started laughing, they couldnParagrapht stop.
        </Paragraph>
        <Heading as="h3">The PeopleParagraphs Rebellion</Heading>
        <Paragraph>
          The people of the kingdom, feeling uplifted by the laughter, started
          to tell jokes and puns again, and soon the entire kingdom was in on
          the joke.
        </Paragraph>

        <Paragraph>
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax. Jokester was declared a
          hero, and the kingdom lived happily ever after.
        </Paragraph>
        <Paragraph className="leading-7 [&:not(:first-child)]:mt-6">
          The moral of the story is: never underestimate the power of a good
          laugh and always be careful of bad ideas.
        </Paragraph>
      </section>

      <section className="border p-8 bg-white flex flex-col gap-4">
        <Heading as="h2" className="mt-0">
          Buttons
        </Heading>
        <div className="flex gap-4">
          <Button>Filled</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="icon">
            <XIcon />
          </Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      <section className="border p-8 bg-white flex flex-col gap-4">
        <Heading as="h2" className="mt-0">
          Palette
        </Heading>
        <div className="flex gap-4">
          <div className="flex-1 p-4 bg-pblue text-white">Primary</div>
          <div className="flex-1 p-4 bg-pgreen text-white">N/A</div>
          <div className="flex-1 p-4 bg-pyellow text-white">N/A</div>
          <div className="flex-1 p-4 bg-porange text-white">N/A</div>
          <div className="flex-1 p-4 bg-pred text-white">Destructive</div>
        </div>
      </section>

      <section className="border p-8 bg-white flex flex-col gap-4">
        <Heading as="h2" className="mt-0">
          Lists (TODO)
        </Heading>
        <ul className="ml-6 list-disc flex flex-col gap-2">
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
      </section>

      <section className="border p-8 bg-white flex flex-col gap-4">
        <Heading as="h2" className="mt-0">
          Tables (TODO)
        </Heading>
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                KingParagraphs Treasury
              </th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                PeopleParagraphs happiness
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Empty
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Overflowing
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Modest
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Satisfied
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Full
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Ecstatic
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

function Section({
  children,
}: {
  children: React.ReactNode | React.ReactNode[]
}) {
  ;<section className="border rounded-lg p-4">{children}</section>
}
