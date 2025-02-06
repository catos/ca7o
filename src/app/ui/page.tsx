import { Alert } from "@/components/ui/alert"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { XIcon } from "lucide-react"

export default function UI() {
  return (
    <div className="flex flex-col gap-8">
      <h1>UI Components</h1>
      <section className="border p-8">
        <h1>The Typography Chronicles</h1>
        <p>
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>

        <h2>The King&apos;s Plan</h2>
        <p>
          The king thought long and hard, and finally came up with{" "}
          <a href="/ui#">a brilliant plan</a>: he would tax the jokes in the
          kingdom.
        </p>
        <blockquote>
          &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
          it&apos;s only fair that they should pay for the privilege.&quot;
        </blockquote>

        <h3>The Joke Tax</h3>
        <p>
          The king&apos;s subjects were not amused. They grumbled and
          complained, but the king was firm:
        </p>
        <p>
          As a result, people stopped telling jokes, and the kingdom fell into a
          gloom. But there was one person who refused to let the king&apos;s
          foolishness get him down: a court jester named Jokester.
        </p>

        <h3 className="text-muted">Muted text</h3>
        <p className="text-muted">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king&apos;s pillow, in his
          soup, even in the royal toilet. The king was furious, but he
          couldn&apos;t seem to stop Jokester.
        </p>
        <p>
          And then, one day, the people of the kingdom discovered that the jokes
          left by Jokester were so funny that they couldn&apos;t help but laugh.
          And once they started laughing, they couldn&apos;t stop.
        </p>

        <h3>The People&apos;s Rebellion</h3>
        <p>
          The people of the kingdom, feeling uplifted by the laughter, started
          to tell jokes and puns again, and soon the entire kingdom was in on
          the joke.
        </p>
        <p>
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax. Jokester was declared a
          hero, and the kingdom lived happily ever after.
        </p>
        <p>
          The moral of the story is: never underestimate the power of a good
          laugh and always be careful of bad ideas.
        </p>

        <h3>Lists for everyone!</h3>
        <ul>
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>

        <h3 className="mt-0">Tables (TODO)</h3>
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                King&apos;s Treasury
              </th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                People&apos;s happiness
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

        <h3>Font serif lorem</h3>
        <p className="font-serif">
          Proin sed nibh efficitur, iaculis nunc ut, aliquam erat. In quis
          finibus mauris. Maecenas quis elit sollicitudin, bibendum purus in,
          condimentum purus. Donec scelerisque eros odio, scelerisque interdum
          ligula mattis et. Morbi ut aliquet lacus. In mollis urna et tortor
          volutpat, vitae egestas augue rhoncus.
        </p>

        <h3>Font mono lorem</h3>
        <p className="font-mono">
          Phasellus bibendum enim vel nulla sollicitudin elementum. Nam odio
          turpis, interdum ac enim quis, accumsan hendrerit felis. Nunc maximus,
          lacus in consequat malesuada, erat elit maximus velit, ac egestas leo
          justo nec est. Vestibulum condimentum mi urna, id viverra nisl posuere
          vel. Cras imperdiet justo a eleifend interdum. Vestibulum in eros
          felis. Ut semper egestas sapien, et varius lectus. Donec in justo et
          magna eleifend malesuada.
        </p>
      </section>

      <section className="flex flex-col gap-4 border p-8">
        <h2 className="mt-0">Alert</h2>
        <div className="flex flex-wrap gap-4">
          <Alert>Info type alert</Alert>
          <Alert variant="success">Success type alert</Alert>
          <Alert variant="warning">Warning type alert</Alert>
        </div>
      </section>

      <section className="flex flex-col gap-4 border p-8">
        <h2 className="mt-0">Avatar</h2>
        <div className="flex flex-wrap gap-4">
          <Avatar
            fallback="👑"
            src="https://avatars.githubusercontent.com/u/1101093?v=4"
          />
          <Avatar fallback="👑" src="" />
        </div>
      </section>

      <section className="flex flex-col gap-4 border p-8">
        <h2 className="mt-0">Button</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Filled</Button>
          <Button variant="button-outlined">Outlined</Button>
          <Button variant="button-icon">
            <XIcon />
          </Button>
          <Button variant="button-link">Link</Button>
          <Button variant="button-destructive">Destructive</Button>
        </div>
      </section>

      <section className="flex flex-col gap-4 border p-8">
        <h2 className="mt-0">Forms</h2>
        <div>
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            name="title"
            type="text"
            required
            placeholder="A short descriptive title"
          />
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <Textarea
            id="text"
            name="text"
            required
            className="h-32"
            placeholder="A descriptive text"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4 border p-8">
        <h2 className="mt-0">Palette</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 bg-primary p-4 text-center text-white">
            Primary
          </div>
          <div className="flex-1 bg-secondary p-4 text-center text-white">
            Secondary
          </div>
          <div className="flex-1 bg-muted p-4 text-center text-white">
            Muted
          </div>
          <div className="flex-1 bg-accent p-4 text-center text-white">
            Accent
          </div>
          <div className="flex-1 bg-destructive p-4 text-center text-white">
            Destructive
          </div>
        </div>
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
