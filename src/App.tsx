import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Heart, Github, Globe } from 'lucide-react'
import { StagewiseToolbar } from '@stagewise/toolbar-react'
import ReactPlugin from '@stagewise-plugins/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StagewiseToolbar
        config={{
          plugins: [ReactPlugin],
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            React + shadcn/ui + Netlify
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A modern React application built with shadcn/ui components, ready for Netlify deployment.
            Beautiful, accessible, and customizable components built on top of Radix UI and Tailwind CSS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                shadcn/ui
              </CardTitle>
              <CardDescription>
                Beautiful and accessible React components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built on top of Radix UI and Tailwind CSS. Copy, paste, and customize to your heart's content.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-500" />
                Netlify Ready
              </CardTitle>
              <CardDescription>
                Optimized for Netlify deployment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Pre-configured for seamless deployment to Netlify with optimized build settings.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Deploy Now
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                Open Source
              </CardTitle>
              <CardDescription>
                Built with modern open source tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                React, Vite, TypeScript, Tailwind CSS, and Radix UI - all open source and battle-tested.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Source
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center">
          <Card className="inline-block">
            <CardHeader>
              <CardTitle>Interactive Counter</CardTitle>
              <CardDescription>
                Test the component interactivity
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold mb-4">{count}</div>
              <div className="flex gap-2 justify-center">
                <Button 
                  onClick={() => setCount(count - 1)}
                  variant="outline"
                  disabled={count <= 0}
                >
                  Decrease
                </Button>
                <Button onClick={() => setCount(count + 1)}>
                  Increase
                </Button>
                <Button 
                  onClick={() => setCount(0)}
                  variant="destructive"
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
