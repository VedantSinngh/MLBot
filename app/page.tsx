import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brain, Trophy, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="flex flex-col items-center text-center">
              <Brain className="h-16 w-16 text-primary mb-8" />
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Welcome to ML Hackathon Platform
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                Join the community of ML enthusiasts, showcase your models, and compete in exciting challenges. Transform your ideas into impactful solutions.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button size="lg" asChild>
                  <Link href="/register">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/competitions">View Competitions</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose Our Platform?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Everything you need to host, manage, and participate in ML competitions
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Model Management</h3>
                <p className="mt-2 text-muted-foreground">
                  Easy-to-use interface for managing and deploying your ML models
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Live Competitions</h3>
                <p className="mt-2 text-muted-foreground">
                  Participate in exciting competitions and showcase your skills
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Community</h3>
                <p className="mt-2 text-muted-foreground">
                  Connect with other ML enthusiasts and share knowledge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}