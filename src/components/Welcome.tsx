interface WelcomeProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Welcome({ title, description }: WelcomeProps) {
  return (
    <section className="text-center mb-16">
      <h2 className="text-4xl font-mono font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-zinc-900 dark:from-zinc-300 dark:to-zinc-100">
        {title}
      </h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </section>
  );
}