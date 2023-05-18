#### installation

```
>> brew install doctl
```

#### authentication

```
>> doctl auth init
```
paste the token to the terminal

#### get connection info for ournew cluster

```
>> doctl kubernetes cluster kubeconfig save <cluster_name>
```

#### list all contexts

```
>> kubectl config view
```

#### use a different context

```
>> kubectl config use-context <context_name>
```


#### secret generation

```
>> kubectl create secret generic jwt-secret --from-literal=JWT_KEY=whateveryouwant
```

```
>> kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=whateveryouwant
```