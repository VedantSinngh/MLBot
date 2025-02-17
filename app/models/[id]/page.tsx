'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Brain,
    Star,
    GitFork,
    Clock,
    ArrowLeft,
    Download,
    Share2,
    BookOpen,
    Code,
    LineChart,
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

// Mock data - In production, this would come from your database
const models = {
    'vision-transformer': {
        name: 'Vision Transformer',
        description: 'A state-of-the-art transformer model for computer vision tasks',
        category: 'Computer Vision',
        stars: 1234,
        forks: 234,
        updatedAt: '2024-03-15',
        accuracy: 98.5,
        version: '2.1.0',
        author: 'AI Research Team',
        license: 'MIT',
        framework: 'PyTorch',
        performanceData: [
            { name: 'Jan', accuracy: 96.5, loss: 0.12 },
            { name: 'Feb', accuracy: 97.2, loss: 0.10 },
            { name: 'Mar', accuracy: 98.5, loss: 0.08 },
        ],
        readme: `# Vision Transformer Model

This is a state-of-the-art implementation of the Vision Transformer (ViT) architecture for computer vision tasks.

## Features

- Pre-trained on ImageNet
- Fine-tuning scripts included
- Supports multiple image sizes
- Optimized for inference

## Usage

\`\`\`python
import torch
from vit_model import ViT

model = ViT.from_pretrained('vit-base')
predictions = model(images)
\`\`\`
`,
    },
};

export default function ModelPage() {
    const params = useParams();
    const modelId = params.id as string;
    const model = models[modelId as keyof typeof models];

    if (!model) {
        return (
            <div className="container mx-auto py-24">
                <h1 className="text-4xl font-bold">Model not found</h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-24">
            <div className="mb-8">
                <Link href="/models">
                    <Button variant="ghost" className="mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Models
                    </Button>
                </Link>

                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">{model.name}</h1>
                        <div className="flex items-center space-x-4 mb-4">
                            <Badge variant="secondary" className="text-sm">
                                {model.category}
                            </Badge>
                            <span className="text-sm text-muted-foreground">v{model.version}</span>
                            <span className="text-sm text-muted-foreground">by {model.author}</span>
                        </div>
                        <p className="text-lg text-muted-foreground">{model.description}</p>
                    </div>
                    <div className="flex space-x-2">
                        <Button>
                            <Download className="mr-2 h-4 w-4" /> Download
                        </Button>
                        <Button variant="outline">
                            <Share2 className="mr-2 h-4 w-4" /> Share
                        </Button>
                    </div>
                </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">
                        <BookOpen className="h-4 w-4 mr-2" /> Overview
                    </TabsTrigger>
                    <TabsTrigger value="code">
                        <Code className="h-4 w-4 mr-2" /> Code
                    </TabsTrigger>
                    <TabsTrigger value="performance">
                        <LineChart className="h-4 w-4 mr-2" /> Performance
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <Card>
                        <CardHeader>
                            <CardTitle>Model Information</CardTitle>
                            <CardDescription>Detailed information about the model</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <pre className="bg-muted p-4 rounded-lg overflow-auto">
                                {model.readme}
                            </pre>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="performance">
                    <Card>
                        <CardHeader>
                            <CardTitle>Performance Metrics</CardTitle>
                            <CardDescription>Model performance over time</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[400px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={model.performanceData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area
                                            type="monotone"
                                            dataKey="accuracy"
                                            stroke="hsl(var(--primary))"
                                            fill="hsl(var(--primary))"
                                            fillOpacity={0.2}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="loss"
                                            stroke="hsl(var(--destructive))"
                                            fill="hsl(var(--destructive))"
                                            fillOpacity={0.2}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
