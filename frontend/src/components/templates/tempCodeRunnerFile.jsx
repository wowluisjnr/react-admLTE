<div className="box-body">
                        <Doughnut                          
                            data={{
                                datasets: [{
                                    data: [300, 100, 1000],
                                    backgroundColor: [
                                    'red',
                                    'blue',
                                    'green'
                                    ]                                    
                                }],
                                borderAlign: 'inner'
                            }}                            
                            options={{
                                cutoutPercentage: 70,
                                animation:{animateRotate: false,animateScale:true}
                                
                                
                                }} />
                        </div>