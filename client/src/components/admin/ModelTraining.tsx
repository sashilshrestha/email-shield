import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Play, Check, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const ModelTraining = () => {
  const { toast } = useToast();
  const [trainingProgress, setTrainingProgress] = React.useState(0);
  const [isTraining, setIsTraining] = React.useState(false);
  const [trainingComplete, setTrainingComplete] = React.useState(false);

  const startTraining = () => {
    setIsTraining(true);
    setTrainingProgress(0);
    setTrainingComplete(false);

    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          setTrainingComplete(true);
          toast({
            title: 'Model Training Complete',
            description:
              'The model has been successfully trained and is ready for deployment.',
            variant: 'default',
          });
          return 100;
        }
        return prev + 5;
      });
    }, 300);
  };

  const resetTraining = () => {
    setTrainingProgress(0);
    setIsTraining(false);
    setTrainingComplete(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          Model Training
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="email" className="w-full">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="email" className="flex-1">
              Email Model
            </TabsTrigger>
            <TabsTrigger value="url" className="flex-1">
              URL Model
            </TabsTrigger>
          </TabsList>

          <TabsContent value="email">
            <div className="space-y-4">
              <div className="bg-accent p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Email Classifier Model</h3>
                  <span className="text-xs text-muted-foreground">
                    Last updated: 2025-03-28
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  This model classifies emails as safe, spam, phishing, or
                  containing malware.
                </p>

                {isTraining || trainingProgress > 0 ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {isTraining
                          ? 'Training in progress...'
                          : trainingComplete
                          ? 'Training complete'
                          : 'Training paused'}
                      </span>
                      <span className="text-sm">{trainingProgress}%</span>
                    </div>
                    <Progress value={trainingProgress} className="h-2" />

                    <div className="flex justify-end gap-2 mt-4">
                      {trainingComplete ? (
                        <Button
                          className="gap-2"
                          size="sm"
                          variant="outline"
                          onClick={resetTraining}
                        >
                          <RotateCcw className="h-4 w-4" />
                          Reset
                        </Button>
                      ) : (
                        <Button
                          className="gap-2"
                          size="sm"
                          variant="outline"
                          onClick={resetTraining}
                        >
                          Cancel
                        </Button>
                      )}
                    </div>
                  </div>
                ) : (
                  <Button className="gap-2" onClick={startTraining}>
                    <Play className="h-4 w-4" />
                    Start Training
                  </Button>
                )}
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Training Dataset</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Samples</p>
                    <p className="font-medium">45,862</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Categories</p>
                    <p className="font-medium">4</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Updated</p>
                    <p className="font-medium">2025-04-01</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Accuracy</p>
                    <p className="font-medium">98.7%</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="url">
            <div className="space-y-4">
              <div className="bg-accent p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">URL Analysis Model</h3>
                  <span className="text-xs text-muted-foreground">
                    Last updated: 2025-04-02
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  This model analyzes URLs to detect phishing sites, malware
                  distribution, and other malicious content.
                </p>

                <Button className="gap-2">
                  <Play className="h-4 w-4" />
                  Start Training
                </Button>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Training Dataset</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Samples</p>
                    <p className="font-medium">78,431</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Categories</p>
                    <p className="font-medium">5</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Updated</p>
                    <p className="font-medium">2025-04-02</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Accuracy</p>
                    <p className="font-medium">97.3%</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ModelTraining;
