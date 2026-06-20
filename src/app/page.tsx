export default function HomePage() {
  return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
        <section className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        <span className="text-sm font-medium text-blue-600">
          Учебный проект
        </span>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            MongoDB Todo
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            Todo-приложение на Next.js, MongoDB, TypeScript, Zod, React Hook Form
            и Tailwind CSS.
          </p>

          <div className="mt-8 flex gap-3">
            <button
                type="button"
                className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Войти
            </button>

            <button
                type="button"
                className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Регистрация
            </button>
          </div>
        </section>
      </main>
  );
}