import Layout from "@/components/layout"
import Editor from "@/components/editor"

function App() {
  return (
    <Layout>
      <main className="m-3 flex flex-1 flex-col gap-4 rounded-lg border bg-white p-4 md:gap-8 md:p-6">
        <Editor />
      </main>
    </Layout>
  )
}

export default App
