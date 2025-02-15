'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Star, GitFork, Clock } from 'lucide-react';

// Mock data - In production, this would come from your database
const models = [
    {
        id: 'vision-transformer',
        name: 'Vision Transformer',
        description: 'A state-of-the-art transformer model for computer vision tasks',
        category: 'Computer Vision',
        stars: 1234,
        forks: 234,
        updatedAt: '2024-03-15',
        accuracy: 98.5,
    },
    {
        id: 'bert-sentiment',
        name: 'BERT Sentiment Analysis',
        description: 'Fine-tuned BERT model for sentiment analysis on social media data',
        category: 'NLP',
        stars: 856,
        forks: 156,
        updatedAt: '2024-03-14',
        accuracy: 94.2,
    },
    {
        id: 'time-series-forecaster',
        name: 'Time Series Forecaster',
        description: 'Advanced forecasting model using transformer architecture',
        category: 'Time Series',
        stars: 567,
        forks: 89,
        updatedAt: '2024-03-13',
        accuracy: 92.8,
    },
];

export default function ModelsPage() {
    return (
        <div className="container mx-auto py-24">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">ML Models</h1>
                <p className="text-muted-foreground text-lg">
                    Explore our collection of state-of-the-art machine learning models
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {models.map((model) => (
                    <Link key={model.id} href={`/models/${model.id}`}>
                        <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xl mb-2">{model.name}</CardTitle>
                                        <Badge variant="secondary" className="mb-2">
                                            {model.category}
                                        </Badge>
                                    </div>
                                    <Brain className="h-6 w-6 text-primary" />
                                </div>
                                <CardDescription className="line-clamp-2">
                                    {model.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 mr-1" />
                                        {model.stars}
                                    </div>
                                    <div className="flex items-center">
                                        <GitFork className="h-4 w-4 mr-1" />
                                        {model.forks}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {new Date(model.updatedAt).toLocaleDateString()}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">Accuracy</span>
                                        <span className="text-sm font-bold text-primary">
                                            {model.accuracy}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-secondary h-2 rounded-full mt-1">
                                        <div
                                            className="bg-primary h-2 rounded-full"
                                            style={{ width: `${model.accuracy}%` }}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}